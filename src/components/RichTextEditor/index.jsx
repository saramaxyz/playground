import React, {Component} from 'react';
import {EditorState, convertToRaw} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import "./style.scss"


class EditorConvertToHTML extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
        this.onEditorStateChange = (editorState) => {
            this.setState({
                editorState,
            });
        };
    }

    render() {
        // Use editorState.getCurrentContent() to get current value.
        // Use draftToHtml(convertToRaw(editorState.getCurrentContent())) to get HTML value.

        const {editorState} = this.state;
        return (
            <div>
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

export default EditorConvertToHTML
