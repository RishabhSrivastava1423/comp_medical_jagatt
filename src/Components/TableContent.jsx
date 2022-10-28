import React from 'react'

function TableContent() {
  return (
    <table className="table text-start">
  <thead>
    <tr>
      <th scope="col">Primary Button</th>
      <th scope="col">Secondary Button</th>
      <th scope="col">Tertiary Button</th>
      <th scope="col">Admission Button</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><button type="button" class="btn btn-info btn-lg">Text Here</button> <p> Large Primary button + hover effect</p></td>
      <td><button type="button" class="btn btn-outline-secondary btn-lg">Text Here</button> <p> Large secondary button + hover effect</p></td>
      <td><button type="button" class="btn btn-light btn-link btn-lg">Text Here</button> <p> Large Tertiary button + hover effect</p></td>
      <td><button type="button" class="btn btn-primary me-1" style={{'borderRadius':'25px'}}>Text here</button>
            <button type="button" class="btn btn-secondary" style={{'borderRadius':'25px'}}>Text here</button></td>
    </tr>

    <tr>
    <td><button type="button" class="btn btn-secondary btn-lg" disabled>Text Here</button> <p> Large Disable button </p></td>
      <td><button type="button" class="btn btn-secondary btn-lg" disabled>Text Here</button> <p> Large Disable button</p></td>
      
    </tr>
    <tr>
      <td><button type="button" class="btn btn-info btn-sm">Text Here</button> <p> Small Primary button + hover effect</p></td>
      <td><button type="button" class="btn btn-outline-secondary btn-sm">Text Here</button> <p> Small secondary button + hover effect</p></td>
      <td><button type="button" class="btn btn-light btn-link btn-sm">Text Here</button> <p> Small secondary button + hover effect</p></td>
    </tr>
    <tr>
    <td><button type="button" class="btn btn-secondary btn-sm" disabled>Text Here</button> <p> Small Disable button </p></td>
      <td><button type="button" class="btn btn-secondary btn-sm" disabled>Text Here</button> <p> Small Disable button</p></td>
      <td> <button type="button" class="btn btn-outline-success btn-lg" ><input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." disabled /> sub-slios heading</button> <p> sub-slios button inactive</p></td>
    </tr>
  </tbody>
</table>
  )
}

export default TableContent
