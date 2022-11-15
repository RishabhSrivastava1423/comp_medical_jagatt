import React from 'react'

function TableContent() {
  return (
    <table align='center' className="table table-responsive" cellSpacing="true" cellPadding="true">
  <thead>
            <tr>
              <td>Primary Button</td>
              <td>secondary Button</td>
              <td>tertiary Button</td>
              <td>admission Button</td>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td><button type="button" className="btn-mj btn_primary_large">Text here</button>
              <br/>
              <span>Large Primary button + Hover effect</span>
            </td>
            <td><button type="button" className="btn-mj btn_secondary_large">Text here</button>
              <br/>
              <span>Large secondary button + Hover effect</span>
            </td>
            <td><button type="button" className="btn-mj btn_tertiary_large">Text here</button>
              <br/>
              <span>Large secondary button + Hover effect</span>
            </td>
            <td><button type="button" className="btn-mj-add dark-bg-add">Text here</button> &nbsp;&nbsp;
              <button type="button" className="btn-mj-add light-bg-add">Text here</button>
            </td>
          </tr>
          <tr>
            <td> <button type="button" className="btn-mj btn_primary_large_disable">Text
                here</button><br/>
              <span>Large Disable
                button</span>
            </td>
            <td><button type="button" className="btn-mj btn_secondary_large_disable">Text here</button>
              <br/>
              <span>Large Disable
                button</span>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <button type="button" className="btn-mj-s btn_primary_small">Text Here</button>
              <span><br/>Small
                Primary button + Hover effect</span>
            </td>
            <td> <button type="button" className="btn-mj-s btn_secondary_small">Text Here</button><br/>
              <span>Small Secondary button + Hover effect</span>
            </td>
            <td> <button type="button" className="btn-mj-s btn_tertiary_small">Text Here</button><br/>
              <span>Small Tertiary button + Hover effect</span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <button type="button" className="btn-mj-s btn_primary_small_disable">Text Here</button><br/>
              <span>Small Primary
                Disable
                button</span>
            </td>
            <td> <button type="button" className="btn-mj-s btn_secondary_small_disable">Text Here</button><br/>
              <span>Small Primary
                Disable
                button</span>
            </td>
            <td>
              <div className="sub-silos-list">
                <i className="fa fa-circle"></i> sub-silos heading
              </div>
              sub-silos button inactive
            </td>
            <td></td>
          </tr>
        </tbody>
</table>
  )
}

export default TableContent
