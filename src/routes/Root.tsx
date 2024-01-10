import React from "react";
import { Outlet, Link, useLoaderData } from "react-router-dom";

export default function Root() {
    const contacts = useLoaderData();
    console.log("contacts --->>>", contacts);
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>

                <nav>
                    {contacts.length > 0 ?
                        <ul>
                            {contacts.map((contact) => {
                                return (<li>
                                    <Link to={`/contacts/${contact.id}`}> {contact.first} {contact.last}</Link>
                                </li>)
                            })}
                        </ul>
                        : (
                            <p>No Contacts </p>
                        )}
                </nav>
                {/* <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to={`contacts/1`}>Arpita</Link>
                        </li>
                        <li>
                            <Link to={`contacts/2`}>Pourush</Link>
                        </li>
                    </ul>
                </nav> */}
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}