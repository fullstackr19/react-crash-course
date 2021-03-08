import React, { Component } from 'react'

export default class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>Add Posts here</h1>
                <form>
                    <div>
                        <label>title:</label><br />
                        <input type="text" name="title" />
                    </div>
                    <div>
                        <label>body:</label><br />
                        <textarea type="text" name="body" />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
