import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withTheme } from '@material-ui/styles';

import TopBar from '../components/TopBar';
import LeftDrawer from '../components/LeftDrawer';
import { cip } from '../resources/events';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Import the styles
import placeholderImage from '../resources/images/pic06.jpg'; // Import the placeholder image

const mapStateToProps = state => {
    return {
        //state:state
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const Home = (props) => (
    <div>
        <LeftDrawer display={props.display} />
        <TopBar />
        <div id='main'>
            <div className="inner">
                <section>
                    <header className="main">
                        <h1>Community Involvement Projects</h1>
                    </header>

                    <Slide easing="ease">
                        {(cip.images.length > 0 ? cip.images : [placeholderImage]).map((image, index) => (
                            <div className="each-slide" key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={image} alt={`Slide ${index}`} style={{ width: '80%', height: 'auto', maxHeight: '500px', objectFit: 'contain' }} />
                            </div>
                        ))}
                    </Slide>

                    <h3 style={{ marginTop: '150px' }}>{cip.description}</h3>
                    <hr className="major" />
                </section>
            </div>
        </div>
    </div>
);

export default withRouter(
    withTheme(
        compose(
            connect(mapStateToProps, mapDispatchToProps)
        )(Home)
    )
);
