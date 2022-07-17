import { useEffect, useState } from "react";
import Footer from "../../comps/Footer";
import data from "../../datatables.json"

const DataTables = () => {

    var allClients = data.data;
    const [clients, setClients] = useState(data.data);
    const [currentPage, setCurrentPage] = useState(1);
    const [entries, setEntries] = useState(3);
    const [currentClients, setCurrentClients] = useState(clients.filter((client, index) => index < entries));
    const [country, setCountry] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [isSortActive, setIsSortActive] = useState("name asce");

    const getPagination = (_clients, _entries) => {
        if (_clients && _entries) {
            var numOfPage = Math.ceil(_clients / _entries);
            var pageList = [];
            var i = 1;
            while (i <= numOfPage) {
                pageList.push(i)
                i++;
            };
            return pageList.map((num, index) => (
                <li key={index} className={`page-item ${currentPage === num && "active"}`}>
                    <button
                        className="page-link"
                        onClick={() => {
                            setCurrentPage(num);
                        }}
                    >
                        {num}
                    </button>
                </li>
            ));
        };
    };

    const getCurrentClients = (_entries, _currentPage, _clients) => {
        var firstIndex = _entries * _currentPage - _entries;
        var lastIndex = _entries * _currentPage;
        return _clients.filter((client, index) => index >= firstIndex && index < lastIndex);
    };

    const filterByCountry = (_country, _allClients) => {
        return _allClients.filter((client) => client.country === _country);
    };

    const filterByFullTextSearch = (_searchInput, _allClients) => {
        var input = _searchInput.toLowerCase();
        var regex = new RegExp(input, "i")
        return _allClients.filter((client) => regex.test(client.name.toLowerCase()) || regex.test(client.email.toLowerCase()) || regex.test(client.country.toLowerCase()));
    }

    const sortAsceClients = (_cloumn, _allClients) => {
        return _allClients.sort((a, b) => a[_cloumn] < b[_cloumn] ? -1 : 1);
    }

    const sortDecsClients = (_cloumn, _allClients) => {
        return _allClients.sort((a, b) => a[_cloumn] > b[_cloumn] ? -1 : 1);
    }

    useEffect(() => {
        //Filter by country
        if (country !== "") {
            setClients(filterByCountry(country, allClients));
        } else {
            setClients(allClients)
        }
    }, [country]);

    useEffect(() => {
        //Sort clients
        if (isSortActive === "name asce") {
            setClients(sortAsceClients("name", clients));
        } else if (isSortActive === "name desc") {
            setClients(sortDecsClients("name", clients));
        } else if (isSortActive === "email asce") {
            setClients(sortAsceClients("email", clients));
        } else if (isSortActive === "email desc") {
            setClients(sortDecsClients("email", clients));
        } else if (isSortActive === "tel asce") {
            setClients(sortAsceClients("tel", clients));
        } else if (isSortActive === "tel desc") {
            setClients(sortDecsClients("tel", clients));
        }
    }, [isSortActive, clients])

    useEffect(() => {
        //Filter by full-text
        if (country === "") {
            setClients(filterByFullTextSearch(searchInput, allClients));
        } else if (country !== "") {
            //If country is selected, find clients from the country
            var clientsInCountry = filterByCountry(country, allClients);
            setClients(filterByFullTextSearch(searchInput, clientsInCountry));
        }
    }, [searchInput, country])

    useEffect(() => {
        //Get clinets for the current page and change them based on the number of entries, currentPage and clinets
        setCurrentClients(getCurrentClients(entries, currentPage, clients));
    }, [entries, currentPage, clients, isSortActive]);

    return (
        <div className="container p-3 vh-100 d-flex flex-column">
            <main className="data-tables__wrapper mt-auto">
                <h1>Client Data</h1>
                <div className="row">
                    <div className="col-sm-12 col-md-6 text-start">
                        <div>
                            <label className="data-tables-label">Show
                                <select
                                    name="entries"
                                    id="entries"
                                    className="form-select"
                                    value={entries}
                                    onChange={(e) => {
                                        setEntries(Number(e.target.value));
                                        if (currentPage !== 1) {
                                            setCurrentPage(1);
                                        }
                                    }}
                                >
                                    <option value="3">
                                        3
                                    </option>
                                    <option value="10">
                                        10
                                    </option>
                                    <option value="25">
                                        25
                                    </option>
                                    <option value="50">
                                        50
                                    </option>
                                    <option value="100">
                                        100
                                    </option>
                                </select>
                                entries
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 text-end">
                        <div>
                            <label className="data-tables-label">
                                Search:
                                <input
                                    type="search"
                                    id="search"
                                    name="search"
                                    className="form-control"
                                    placeholder=""
                                    value={searchInput}
                                    onChange={(e) => {
                                        setSearchInput(e.target.value);
                                        if (currentPage !== 1) {
                                            setCurrentPage(1);
                                        }
                                    }}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table data-tables w-100 my-2">
                            <thead>
                                <tr>
                                    <th
                                        className="sorting position-relative"
                                        onClick={() => {
                                            setIsSortActive("name asce");
                                            if (isSortActive === "name asce") {
                                                setIsSortActive("name desc");
                                            }
                                            if (currentPage !== 1) {
                                                setCurrentPage(1);
                                            }
                                        }}
                                    >
                                        Name
                                        <span className={`sort-asce ${isSortActive === "name asce" && "is-active"}`}>
                                            ▴
                                        </span>
                                        <span className={`sort-desc ${isSortActive === "name desc" && "is-active"}`}>
                                            ▾
                                        </span>
                                    </th>
                                    <th
                                        className="sorting position-relative"
                                        onClick={() => {
                                            setIsSortActive("email asce");
                                            if (isSortActive === "email asce") {
                                                setIsSortActive("email desc");
                                            }
                                            if (currentPage !== 1) {
                                                setCurrentPage(1);
                                            }
                                        }}
                                    >
                                        Email
                                        <span className={`sort-asce ${isSortActive === "email asce" && "is-active"}`} >
                                            ▴
                                        </span>
                                        <span className={`sort-desc ${isSortActive === "email desc" && "is-active"}`}>
                                            ▾
                                        </span>
                                    </th>
                                    <th
                                        className="sorting position-relative"
                                        onClick={() => {
                                            setIsSortActive("tel asce");
                                            if (isSortActive === "tel asce") {
                                                setIsSortActive("tel desc");
                                            }
                                            if (currentPage !== 1) {
                                                setCurrentPage(1);
                                            }
                                        }}
                                    >
                                        Tel
                                        <span className={`sort-asce ${isSortActive === "tel asce" && "is-active"}`}>
                                            ▴
                                        </span>
                                        <span className={`sort-desc ${isSortActive === "tel desc" && "is-active"}`} >
                                            ▾
                                        </span>
                                    </th>
                                    <th>
                                        <select
                                            className="form-select"
                                            name="country"
                                            id="country"
                                            value={country}
                                            onChange={(e) => {
                                                setCountry(e.target.value);
                                                if (currentPage !== 1) {
                                                    setCurrentPage(1);
                                                }
                                            }}
                                        >
                                            <option value="" defaultValue>Select a Country</option>
                                            <option value="Australia">Australia</option>
                                            <option value="China">China</option>
                                            <option value="Japan">Japan</option>
                                            <option value="New Zealand">New Zealand</option>
                                            <option value="South Korea">South Korea</option>
                                            <option value="UK">UK</option>
                                        </select>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentClients.map((client, index) => (
                                        <tr key={index}>
                                            <td>{client.name}</td>
                                            <td>{client.email}</td>
                                            <td>{client.tel}</td>
                                            <td>{client.country}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-5 text-start">
                        <div>
                            Showing 1 to {entries > clients.length ? clients.length : entries} of {clients.length} entries
                            {
                                searchInput !== "" || country !== "" && `(filtered from ${allClients.length} total entries)`
                            }
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-7 ">
                        <nav className="" >
                            <ul className="pagination m-0 d-flex justify-content-end">
                                <li className={`page-item previous ${currentPage === 1 && "disabled"}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => {
                                            if (currentPage > 0) {
                                                setCurrentPage(currentPage - 1);
                                            }
                                        }}
                                    >
                                        Previous
                                    </button>
                                </li>
                                {getPagination(clients.length, entries)}
                                <li className={`page-item ${currentPage === Math.ceil(clients.length / entries) && "disabled"}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => {
                                            if (currentPage < Math.ceil(clients.length / entries)) {
                                                setCurrentPage(currentPage + 1);
                                            }
                                        }}
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default DataTables;