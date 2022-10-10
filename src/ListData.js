// import React from 'react';

// function listData(props) {
// 	const myData = props.data
// 	const deleteItem = props.change
// 	return (
// 		<div>
// 			 <div>
// 				<ul>
//           {myData.map((item, index) =>
//           <li key={index}>
//            {item.name} &nbsp; &nbsp;
//             {item.age}
//           </li>
// 					)}
// 					</ul>
//         </div>
// 			 <button onClick={deleteItem}>remove item</button>
// 		</div>
// 	)
// }
import React, { Component } from 'react';
import data from './data';

class listData extends Component {

	constructor(props) {
		// const myData =props.data
	super(props)


this.state = {
	data: [
		{name: 'Ahmad', age: 30},
		{name: 'Yousef', age: 12},
		{name: 'Shatha', age: 14},
		{name: 'Rana', age: 22},
		{name: 'Osama', age: 22},
		{name: 'Ahmad', age: 38} ]

   }
	  this.filterData= this.filterData.bind(this);
	}


     filterData(){
			// eslint-disable-next-line no-unused-vars
			const filterData = data.filter((v,i,a)=>a.findIndex(v2=>(v2.name===v.name))===i)
		 this.setState({
			 data: data.filterData


			 })}


	//  filterData= ()=>{
	// 	this.setState({
	// 		data:data.filter(
	// 			(v, i, a) => a.findIndex(
	// 				t => t.id === v.id || t.name === v.name) === i)
	// 		})
	// 	}

  deleteItem = () =>{
		this.filterData()
    this.setState({
      data: data.pop()

      })
    }


	render() {
		return (
			<div>

	<table className="table" >
  <thead className="bg-dark text-light m-4 p-4">
  <tr>
    <th>name</th>
		<th></th>
		<th></th>
    <th>age</th>
  </tr>
  </thead>


	<thead>
	{data.map((item, index) =>
          <tr key={index}>
         <td>{item.name} </td>
				 <td></td>
				 <td></td>
         <td>{item.age} </td>
          </tr>
					)}
	</thead>


 <td><button onClick={this.deleteItem.bind(this)}>Delete</button></td>
  </table>

			</div>

		);
		}}



export default listData;
