import latinize from 'latinize'
import React, { Component } from 'react'
import Highlighter from './Highlighter'
import styles from './Highlighter.example.css'

export default class HighlighterExample extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchText: 'Generating',
      textToHighlight: `Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.`,
      caseSensitive: false
    }
  }
  render () {
    const { ...props } = this.props
    const {  caseSensitive, searchText, textToHighlight } = this.state
    const searchWords = searchText.split(/\s/).filter(word => word)

    return (
      <div {...props}>
        <div className={styles.Row}>
          <div className={styles.FirstColumn}>
            <h4 className={styles.Header}>
              Search terms
            </h4>
            <input
              className={styles.Input}
              name='searchTerms'
              value={searchText}
              onChange={event => this.setState({ searchText: event.target.value })}
            />
          </div>
         
          <div className={styles.SecondColumn}>
            <h4 className={styles.Header} style={{paddingLeft:"5em"}}>
              Case Sensitive?
            </h4>
            <input
              checked={caseSensitive}
              className={styles.Input}
              name='caseSensitive'
              onChange={event => this.setState({ caseSensitive: event.target.checked })}
              type='checkbox'
              style={{paddingLeft: "5em" }}
            />
          </div>
        </div>

        <h4 className={styles.Header}>
          Body of Text
        </h4>
        <textarea
          className={styles.Input}
          name='textToHighlight'
          value={textToHighlight}
          style={{ height: '15em', width: '100%'}}
          onChange={event => this.setState({ textToHighlight: event.target.value })}
        />

        <h4 className={styles.Header}>
          Output
        </h4>

        <Highlighter
          activeClassName={styles.Active}
          caseSensitive={caseSensitive}
          highlightClassName={styles.Highlight}
          highlightStyle={{ fontWeight: 'normal' }}
          sanitize={latinize}
          searchWords={searchWords}
          textToHighlight={textToHighlight}
          
        />

        <p className={styles.Footer}>
          
        </p>
      </div>
    )
  }
}
