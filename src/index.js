import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from '../components/header';
import Post from '../components/post';
import '../styles/index.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        avatar:
          'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d74712e9b31ac943d46541e6e6ed559f&auto=format&fit=crop&w=400&q=60',
        name: 'Juliana Carneiro',
        time: '5 minutos',
        content: 'Lorem ipsum blablabla',
      },
      {
        id: 2,
        avatar:
          'https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=400&q=60',
        name: 'João Carlos Oliveira',
        time: '12 minutos',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus mattis nibh, et consequat augue blandit vel. Donec interdum lectus sit amet lacus faucibus, non interdum nulla tempus. Proin efficitur, leo quis pellentesque pharetra, libero purus porttitor lectus, nec lacinia sapien magna ut lectus. Etiam euismod fermentum ipsum ut rhoncus. Donec eget ante eget velit sollicitudin venenatis. Curabitur varius ac quam rutrum porta. Fusce euismod nunc non ligula varius malesuada. Donec semper lacinia fermentum.',
      },
      {
        id: 3,
        avatar:
          'https://images.unsplash.com/photo-1501943416256-08140ba03763?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e5d02e7870480f606e5a34d76d94f7c&auto=format&fit=crop&w=400&q=60',
        name: 'Ana Clara Silveira',
        time: '34 minutos',
        content: 'Oi pessoal! Bla bla bla lorem ipsum',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <div id="posts">
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('viewport'));
