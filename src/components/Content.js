export default function Content() {
    return (
        <div>
            <div className="content-first">
                <input className="SearchBar" placeholder="Search..." type="text" />
                <img src="../images/searcIcone.png" alt="searchIcone" className="searchIcone"/>
            </div>

            <div className="mainContent">
                <div className="OnTV">
                    <h3>On TV</h3>
                </div>
                <div className="FeaturedLists">
                    <h3>Featured Lists</h3>
                </div>
                <div className="News">
                    <h3>News</h3>
                </div>
                <div className="WeekRelease">
                    <h3>Week Release</h3>
                </div>
            </div>
        </div>
    )
}