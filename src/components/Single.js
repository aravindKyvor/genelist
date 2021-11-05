
  
import React from "react";
import Container from '@material-ui/core/Container';

import axios from 'axios'


  


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



class Post extends React.Component {
	state = {
	  posts: {}
	};
  
	componentDidMount() {
	  const postID = this.props.match.params.postID;
	  axios.get(`http://127.0.0.1:8000/api/post/${postID}/`).then(res => {
		this.setState({
		  posts: res.data
		});
	  });
	}

   render(){
	return (
		<Container component="main" maxWidth="md">
			<strong>Variant : {this.state.posts.Variant}</strong>
	    <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><strong>Gene</strong></TableCell>
            <TableCell> <strong>Impact</strong> </TableCell>
            <TableCell><strong>Protein Effect</strong></TableCell>
            <TableCell>  <strong>Variant Description</strong> </TableCell>
			<TableCell> <strong>Associated with drug Resistance</strong>  </TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow >
              <TableCell>{this.state.posts.Gene}</TableCell>
              <TableCell>{this.state.posts.Impact}</TableCell>
              <TableCell>{this.state.posts.Protein_Effect}</TableCell>
              <TableCell>{this.state.posts.Variant_Description}</TableCell>
              <TableCell>{this.state.posts.Associated_with_drug_Resistance}</TableCell>
            </TableRow>
         
        </TableBody>
      </Table>
		</Container>
	);
   }
	
}


export default Post



