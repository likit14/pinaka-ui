import React, { Component } from 'react';
import '../Grid.css'; // Import CSS file for styling

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    // Fetch data from the backend API
    fetch('https://your-backend-api-url/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          data: data,
          loading: false
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.setState({
          error: error,
          loading: false
        });
      });
  }

  render() {
    const { data, loading } = this.state;

    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous"></link>
          <nav >
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Storage Cluster</li>
            </ol>
          </nav>
          {/* <h1 style={{ fontSize: '24px' }}><b>Status </b></h1> */}
      <div className="grid-container">
        
        {loading && <div>Loading...</div>}
        {!loading && (
          <>
            
            <div className="grid-item">
              <div className="grid-header" style={{ fontSize: '18px' }}><strong>Cluster Status</strong></div>
              {data.map((item, index) => (
                <div key={index}>{item.clusterStatus}</div>
              ))}
            </div>
            <div className="grid-item">
              <div className="grid-header" style={{ fontSize: '18px' }}><strong>Hosts</strong></div>
              {data.map((item, index) => (
                <div key={index}>{item.hosts}</div>
              ))}
            </div>
            <div className="grid-item">
              <div className="grid-header" style={{ fontSize: '18px' }}><strong>Monitors</strong></div>
              {data.map((item, index) => (
                <div key={index}>{item.monitors}</div>
              ))}
            </div>

            <div className="grid-item">
              <div className="grid-header" style={{ fontSize: '18px' }}><strong>Raw Capacity</strong></div>
              {data.map((item, index) => (
                <div key={index}>{item.rawcapacity}</div>
              ))}
            </div>
            <div className="grid-item">
              <div className="grid-header" style={{ fontSize: '18px' }}><strong>Pg Status</strong></div>
              {data.map((item, index) => (
                <div key={index}>{item.pgstatus}</div>
              ))}
            </div>
            <div className="grid-item">
              <div className="grid-header" style={{ fontSize: '18px' }}><strong>Pools</strong></div>
              {data.map((item, index) => (
                <div key={index}>{item.pools}</div>
              ))}
            </div>
          </>
        )}
      </div>
      </div>
    );
  }
}

export default Grid;
