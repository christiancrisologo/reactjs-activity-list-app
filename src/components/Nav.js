const LinkItem = ({item}) =>
    (
        <li> <a href={item.url}>{item.label}</a></li>
    );

export const Nav = (props) => (
    <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">{props.title}</a>
            </div>
            
            <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    {
                        props.links.map((item, i) => (<LinkItem item={item} key={i} />))
                    }
                </ul>
            </div>
        </div>
    </nav>
);

Nav.defaultProps = {
    links:[],
    title:"My Activity"
}