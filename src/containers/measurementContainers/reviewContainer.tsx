import React, { Component } from 'react';

import ReviewComponent from '../../components/measurementComponents/reviewComponent';

interface ReviewProps {

}

export default class ReviewContainer extends Component<ReviewProps> {
    constructor(props:ReviewProps) {
        super(props);
        this.state = {
          
        };
      }
      render() {
        return (
          <ReviewComponent />
        );
      }
    }
