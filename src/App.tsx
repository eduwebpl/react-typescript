import React, { Component, FC, ReactElement } from 'react';
import PropTypes from 'prop-types';

const MoviePropTypes = {
    title: PropTypes.string.isRequired,
    duration: PropTypes.number,
    platforms: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

interface IMovieProps {
    title?: string;
    duration?: number;
    platforms: string[];
}

const Movie: FC<IMovieProps> = (props) => {
    return null;
};
Movie.propTypes = MoviePropTypes;

class Movie2 extends Component<IMovieProps> {
    static propTypes = MoviePropTypes;

    render() {
        return null;
    }
}

function App(): ReactElement {
    return (
        <div className="App">
            <Movie2 platforms={['netflix']} />
        </div>
    );
}

export default App;
