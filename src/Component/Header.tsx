import React from 'react'

function Header() {
    return (
        <div className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-light px-3">
                <div className="d-flex align-items-center">
                    <span
                        className="font-18 ml-3 d-lg-none"
                        style={{ color: '#555b6d' }}
                        data-sidebartype="mini-sidebar"
                    >
                        <i className="uil uil-bars" />
                    </span>

                    <div
                        className={`app-search d-none header-search position-relative `}
                    >
                        <span className="search-icon" />
                        <div className="position-relative">
                            <input
                                type="search"
                                className="form-control input-search-left"
                                placeholder="Search PortPro.."
                                style={{ width: '454px' }}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
