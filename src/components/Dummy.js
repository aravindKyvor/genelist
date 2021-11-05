














// import { Link } from 'react-router-dom';
// import axiosInstance from '../../axios';
// import React, { useState, useEffect,  } from 'react';

// import Searchposts from './Searchposts';

// import Paper from "@material-ui/core/Paper";

// import Grid from "@material-ui/core/Grid";


// import { styled } from "@mui/material/styles";



// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";


  

// import contacts from './flower.json'
// const Item = styled(Paper)(({ theme }) => ({
// 	...theme.typography.body2,
// 	padding: theme.spacing(1),
// 	textAlign: "center",
// 	color: theme.palette.text.secondary
//   }));

// class posts extends React.Component {

// 	getUnique(arr, comp) {
// 		const unique = arr.map(e => e[comp]).map((e, i, final) => final.indexOf(e) === i && i).filter(e => arr[e])
// 	      .map(e => arr[e]);
	
// 		return unique;
// 	  }
	






// 	render(){
	
// 		const unique = this.getUnique(contacts, "Gene");
	
//   return (
// 	<React.Fragment>
//     <Container>
        
//         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
			
	
// 		{unique.map(el => {
//             return (
//           <Grid item xs={2} key={el.id}>
//             <Item >
// 			<Link to={`/posts/${el.Gene}`}  style={{textDecoration: 'none'}}><Item style={{backgroundColor:"#ffffff"}} >    <Box sx={{ color: 'secondary.main' }} style={{ wordWrap: "break-word"}}>{el.Gene}</Box>	
												
	
//              </Item></Link>
// 			</Item>
//           </Grid>
//              );
// 			})}
//         </Grid>
      
//     </Container>
// 	</React.Fragment>
 
		
      
     
//   );
// 		}
// }


// export default posts
