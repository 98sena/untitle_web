import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import more from 'lib/more.png';

const Item = styled.div ` 
  width : 20em;
  height: 20em;
  box-shadow: 1em 1em 1em rgba(0, 0, 0, 0.2); 
  padding: 1.5em;
  text-align: center;
  background-color: #f8f8f8;
  margin-top : 0.5em;
  margin-bottom: 1em;
  margin-left : 1em;
  margin-right : 1em;
`;

const Type = styled.h4 `
  color: ${props => {
  if (props.type==="멘토링") return '#6EA3EA';
  else if (props.type==="스터디") return '#2859A3';
  else return '#E64F4F';
  }};
`;

const More = styled.img `
  width : 1em;
  height : auto;
  float: right;
  border-radius : 200%;
  cursor:pointer;
  &:hover {
    background-color : #eeeeee;
  }

`;

const Button = styled.button `
    font-size : 1em;
    border-radius: 30px;
    border-width: 2px; 
    border-style : solid 
    border-color : ${props => {
      if (props.type==="멘토링") return '#6EA3EA';
      else if (props.type==="스터디") return '#2859A3';
      else return '#E64F4F';
    }};
    background-color: rgba(0,0,0,0);
    color: ${props => {
      if (props.type==="멘토링") return '#6EA3EA';
      else if (props.type==="스터디") return '#2859A3';
      else return '#E64F4F';
    }};
    cursor: pointer;
    font-size:1em;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    &:focus {
    outline: none;
    }
    margin-bottom : 1.2em;

`;

const Block1 = styled.p `
    display : block;
`;

const Block2 = styled.p `
    display : none;
`;

const Block3 = styled.p `
    display : none;
`;

class NoticeItem extends Component {
  handleChange = () => {
    if(this.props.lead) {
      if (this.block2.style.display === "none") {
        this.block2.style.display = "block";
        this.block1.style.display = "none";
      } 
      else {
        this.block2.style.display = "none";
        this.block1.style.display = "block";
      }
    }
    else {
      if (this.block3.style.display === "none") {
        this.block3.style.display = "block";
        this.block1.style.display = "none";
      } 
      else {
        this.block3.style.display = "none";
        this.block1.style.display = "block";
      }
    }
  }

    render() {
        const link = `/activity/${this.props.id}/notice`;

        return (
            <Item>
              <div> <More src={more} alt="더보기" onClick={this.handleChange}></More></div>
            <NavLink to={link}>
                <Type type={this.props.type}>{this.props.type}</Type>
                <h2>{this.props.title}</h2>
                <h3>{this.props.leader}</h3>

                <Block1 ref={(ref) => this.block1=ref}>
                  <div>{this.props.startDate} ~ {this.props.endDate}</div>
                  <div>{this.props.joinNum}/{this.props.recruitNum}명</div>
                </Block1>

                <Block2 ref={(ref) => this.block2=ref}>
                  <Button type={this.props.type}>정보수정</Button>
                  <div>
                  <NavLink to={{
                    pathname:`activity/${this.props.id}/member`,
                    state:{
                      title: this.props.title,
                      leader: this.props.leader
                    }
                  }}><Button type={this.props.type}>구성원정보</Button></NavLink>
                  </div>
                </Block2>

                <Block3 ref={(ref) => this.block3=ref}>
                  <Button type={this.props.type}>신청취소</Button>
                </Block3>

            </NavLink>
            </Item>
        );
    }
}

export default NoticeItem;