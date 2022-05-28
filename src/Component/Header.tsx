import React from 'react'

function Header() {
    return (
        <div className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-light">
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

                <div
                    className="navbar-collapse collapse justify-content-end"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav float-right d-flex align-items-center">
                        <li className="nav-item">
                            <span
                                data-tip
                                data-for="Email"
                                id="floatingChatsSideBarHandler"
                                className="nav-link text-gray-300"
                                style={{ position: 'relative' }}
                            />
                        </li>

                        <li className="nav-item nav-item-image pointer">
                            <span className="d-flex align-items-center nav-link">
                                <div className="avatar-circle">
                                    <img
                                        src=""
                                        className="avatar-circle__image rounded-circle"
                                        alt=""
                                        width="30"
                                    />
                                </div>
                                <span className="ml-2">
                                    Hi,
                                    <span className="ml-1 font-medium text-dark text-capitalize">
                                        Reuben Thapa
                                    </span>
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
