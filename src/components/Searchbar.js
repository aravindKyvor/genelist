import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary
  }));

const Search = () => {
	

	const search = 'search';
	const [appState, setAppState] = useState({
		search: '',
		posts: [],
	});

	useEffect(() => {
		axiosInstance.get(search + '/' + window.location.search).then((res) => {
			const allPosts = res.data;
			setAppState({ posts: allPosts });
			console.log(res.data);
			
		});
	}, [setAppState]);

	return (
		<React.Fragment>
		 <Container maxWidth="lg">
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
		{appState.posts.map((post) => {
						return (
          <Grid item xs={2} key={post.id}>
            <Item >
			<Link to={`/posts/${post.id}`}  style={{textDecoration: 'none'}}><Item style={{backgroundColor:"#ffffff"}} >    <Box sx={{ color: 'secondary.main' }} style={{ wordWrap: "break-word"}}>{post.Gene}</Box>	
												
	
             </Item></Link>
			</Item>
          </Grid>
             );
			})}
        </Grid>
      </Box>
    </Container>
		</React.Fragment>
				
	);
};
export default Search;