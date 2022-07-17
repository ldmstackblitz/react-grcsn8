import React from 'react';

export default function (ContentComponent) {

  return function (props) {

    return (
      <>
        <div>Menu</div>
        <div>Header</div>
        <ContentComponent {...props} />
      </>
    );

  }

  // return class extends React.Component {

  //   constructor(props) {
  //     super(props);
  //   }

  //   render() {
  //     return <ContentComponent {...this.props} />;
  //   }

  // }

}
