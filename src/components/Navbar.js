import React, { useState } from 'react';

import SearchBar from 'material-ui-search-bar';
import { useHistory } from 'react-router-dom';
import './nav.css'


function Header() {
	
	let history = useHistory();
	const [data, setData] = useState({ search: '' });

	const goSearch = (e) => {
		history.push({
			pathname: '/search/',
			search: '?search=' + data.search,
		});
		window.location.reload();
	};
	return (
		<React.Fragment>
		
      <br/>
            <img src= 'https://admin.google.com/u/0/ac/images/logo.gif?uid=112108830417041900171&service=google_gsuite' className="center"  alt=""  />
		          <br/>
					<SearchBar 
						value={data.search}
						onChange={(newValue) => setData({ search: newValue })}
						onRequestSearch={() => goSearch(data.search)} style={{
                            margin: "0 auto",
                            maxWidth: 800,
							
                          }}
						 
					/>
                    <br/>
				
<br/>
<br/>
<br/>


				
		
		</React.Fragment>
	);
}

export default Header;