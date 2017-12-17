import React from "react";
import styled from 'styled-components'

const OrderedList = styled.ol`
  padding-left: 0;
  list-style-type: none;
`

class Segment extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h3 className="fw7 f4 mb0 mt4">{this.props.title}</h3>
        <p className="f4 mb0 mt2">
          { this.props.content  }
          { this.props.list &&
            <OrderedList className="f4">
              <li>{ this.props.list ? this.props.list[0] : "" }</li>
              <li>{ this.props.list ? this.props.list[1] : "" }</li>
              <li>{ this.props.list ? this.props.list[2] : "" }</li>
            </OrderedList>
          }
        </p>
      </div>
    )
  }
}

export default Segment;
