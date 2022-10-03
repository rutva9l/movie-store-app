import React, { Component } from 'react';
import _ from 'lodash';

class Pagination extends Component {
    render() {
        const {pageItems,pageSize,onChange,current}=this.props;
        const pageCount=Math.ceil(pageItems/pageSize);
        const pages= _.range(1,pageCount+1);
        
        return (
            <nav style={{marginTop:20}}>
                <ul className="pagination pagination-md">
                    {pages.map(page=> <li key={page} className={page===current?"page-item active":"page-item"} onClick={()=>onChange(page)}><a  className="page-link">{page}</a></li>)}
                </ul>
            </nav>
        );
    }
}

export default Pagination;