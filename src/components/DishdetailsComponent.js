import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    
  constructor(props) {
        super(props);
        this.state = {
            dishDetails: null
        };
    }

    renderDish(dish) {
        if (dish != null){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(dish) {
        if (dish != null) {
            let commentsList = dish.comments.map((commentItem) => {
                return(
                    <div>
                        <li>
                            {commentItem.comment}
                        </li>   
                        <li>
                            {'--' + commentItem.author}
                        </li>     
                    </div>                 
                )
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ul class="list-unstyled">
                        {commentsList}
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }    

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dishDetails)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dishDetails)}
                </div>
            </div>
        )
    }

}

export default DishDetail;