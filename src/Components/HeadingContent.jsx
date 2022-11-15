import React from 'react'

const HeadingContent = () => {
  return (
    <React.Fragment>
        <h1>Heading 1 - 54 Regular</h1>
        <h2>Heading 2 - 48 Regular</h2>
        <h3>Heading 3 - 42Regular</h3>
        <h4>Heading 4 - 36 Regular</h4>
        <h5>Heading 5 - 30 Regular</h5>
        <h5 className="h5-sb">Heading 5 - 30 Semi-Bold</h5>
        <h6>Heading 6 - 26 Regular</h6>
        <h6 className="h6-sb">Heading 6 - 26 Semi-Bold</h6>
        <hr/>
        <p className="s1-18-sb">Subtitle1-18 Semi-Bold | Letter spacing 0.15</p>
        <p className="s2-18-r">Subtitle2 Link - 18 Regular | Letter spacing 0.15</p>
        <p className="b1-16-r">Bodycopy 1-16 Regular| Letter spacing 0.15</p>
        <p className="l2-16">List 2- 16 Regular | Letter spacing 0.15</p>
        <p className="b2-16-m">Bodycopy 2 - 16 Med | Letter spacing 0.15</p>
        <p className="b3-16-b">Bodycopy 3 - 16 Bold | Letter spacing 0.15</p>
        <p className="bl-16-r">Bodycopy Link-M - 16 Regular | Letter spacing 0.15</p>
        <p className="s2-14-m">Subtitle2 - 14 Medium | Letter spacing 0.1</p>
        <p className="s2-14-r">Subtitle2 - 14 Regular | Letter spacing 0.1</p>
        <p className="sl-14-r">Subtitle2-Link - 14 Regular| Letter spacing 0.1</p>
        <p className="s2l-14-r">Subtitle2C-M - 14 Regular | Case: All Caps | Letter spacing 1.25</p>
        <p className="c12-r">Caption - 12 Regular</p>
        <p className="c12-sm">Caption - 12 semibold</p>
        <p className="cl-12-r">Link - 12 Regular</p>
        <p className="o-10-r">Overline - 10 Regular | Case: All caps | Letter spacing 1.5</p>
    </React.Fragment>
  )
}

export default HeadingContent