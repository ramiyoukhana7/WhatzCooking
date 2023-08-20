import './Sidebar.css'

function Sidebar() {
    return (
        <aside className="sidebar">
            <button className="sidebar-btn sidebar-btn-explore">Explore</button>
            <button className="sidebar-btn sidebar-btn-following">Following</button>
        </aside>
    )
}

export default Sidebar;