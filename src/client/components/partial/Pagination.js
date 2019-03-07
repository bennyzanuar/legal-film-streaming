import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Pagination extends Component {
    createList = (page, total_page) => {
        let list = []

        for (let i = 0; i < total_page; i++) {
            list.push(
                <li key={`page-${i}`}>
                    <Link to={`?page=${i+1}`} className={(i+1) == page ? 'current-page' : ''}>{i+1}</Link>
                </li>
            )
        }
        return list
    }
    render() {
        const { page, total_page } = this.props
        
        return (
            <nav className="pagination">
                <ul>{this.createList(page, total_page)}</ul>
            </nav>
        )
    }
}   

export default Pagination