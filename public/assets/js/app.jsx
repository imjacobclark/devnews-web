var DeveloperNews = React.createClass({
    getInitialState: function() {
        return {
            data: []
        };
    },
    loadCommentsFromServer: function(){
        $.ajax({
            url: "http://api.devnews.today/",
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    getRootURL: function(url){
        if(url.search(/^https?\:\/\//) != -1)
            parsed = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i, "");
        else
            parsed = url.match(/^www.([^\/?#]+)(?:[\/?#]|$)/i, "");
        
        if(parsed == null)
            return url

        return parsed[1].replace("www.", "");
    },
    render: function(){
        var data = this.state.data.map(function(item){
            item.url = this.getRootURL(item.url);

            return (
                <NewsItem data={item} />
            )
        }.bind(this));

        return (
            <ol>
                {data}
            </ol>
        )
    }
});

var NewsItem = React.createClass({
    render: function(){
        return (
            <li>    
                <a href={this.props.data.url}>{this.props.data.title} </a> 
                
                <span class="details">
                    <strong>{this.props.data.url}</strong> ({this.props.data.source}, score: {this.props.data.score})
                </span>
            </li>
        )
    }
})

React.render(
    <DeveloperNews pollInterval={600} />, document.getElementById('main')
);