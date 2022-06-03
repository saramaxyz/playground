import React, {Component} from 'react';
import {EditorState, convertToRaw} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import "./style.scss"
import PropTypes from "prop-types"


class RichTextEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
        };
        this.onEditorStateChange = (editorState) => {
            const {onChange} = this.props
            const value = editorState.getCurrentContent()
            onChange(value)
            this.setState({
                editorState,
            });
        };
    }

    render() {
        // Use editorState.getCurrentContent() to get current value.
        // Use draftToHtml(convertToRaw(editorState.getCurrentContent())) to get HTML value.
        const {className = ""} = this.props
        const {editorState} = this.state;
        return (
            <div className={"rich-text-editor-container " + className}>
                <Editor
                    editorState={editorState}
                    wrapperClassName="rich-text-wrapper"
                    editorClassName="rich-text-editor"
                    onEditorStateChange={this.onEditorStateChange}
                />
            </div>
        );
    }
}

RichTextEditor.propTypes = {
    onChange:PropTypes.func.isRequired
}


export default RichTextEditor
