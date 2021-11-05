import React from 'react';



import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));


const Posts = (props) => {
	const { posts } = props;

	if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
	return (
		<Container component="main" maxWidth="md">
            <Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

		
					{posts.map((post) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid  item xs={2} sm={4} md={4}    key={post.id}>
								<Item  style={{backgroundColor:" #FFD700"}} >
								<Link
													color="textPrimary"
													to={"/post/" + post.slug}>
												
												<Item  > {post.letters}</Item>
                                </Link>
							
								
									
										
											
									
											
								
								
								</Item>
							</Grid>
						);
					})}
			 </Grid>
    </Box>
    </Container>
	)
};
export default Posts;


