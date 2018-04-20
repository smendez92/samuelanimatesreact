import React from "react";
import { Link } from "react";
import "./HomepageProjectContainer.css";

const HomepageProjectContainer = props => (
    <div className="">
        <div>
            { props.project.title }
        </div>
        <div>
            { props.project.icon }
        </div>
        <div>
            { props.project.summary }
        </div>
        <div>
            { props.project.links.map(result =>
                <div>
                    <div>
                        {result.icon}
                    </div>
                    <div>
                        
                        {result.location === "external" &&
                            <div>
                                <a href={result.url} target="_blank">{ result.title }</a>
                            </div>
                        }
                    </div>
                </div>
            )}
        </div>
    </div>
);

export default HomepageProjectContainer;