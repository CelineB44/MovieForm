import React from 'react';

class FormMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          poster: '',
          comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }


    onChange(e) {
        this.setState({
        [e.target.name]: e.target.value,
        }); 
    }
    
    submitForm(e) {
        e.preventDefault();
		
		const config = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(this.state),
		};
	
		const url = `https://post-a-form.herokuapp.com/api/movies/`;
	
		fetch(url, config)
			.then(res => res.json())
				.then(res => {
			if (res.error) {
				alert(res.error);
			} else {
				alert(`Check your movie ${res}!`);
			}
		}).catch(e => {
			console.error(e);
			alert('Fatal Error!!');
		});

	}	

  render() {
    return (
      <div className="FormMovie">
        <h1>What is your favorite movie ?</h1>
		<form onSubmit={this.submitForm}>
    <fieldset>
      <div className="form-data">
        <label htmlFor="title">Name: </label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={this.onChange}
          value={this.state.title}
        />
      </div>

      <div className="form-data">
        <label htmlFor="poster">URL</label>
        <input
          type="text"
          id="poster"
          name="poster"
          onChange={this.onChange}
					value={this.state.poster}
					placeholder="url of your favorite movie"
        />
      </div>

      <div className="form-data">
        <label htmlFor="comment">And why?</label>
        <textarea
          type="texte"
          id="comment"
          name="comment"
          onChange={this.onChange}
					value={this.state.comment}
					placeholder="Why this movie?"
        />
      </div>
      <hr />
      <div className="form-data">
        <input className="button" type="submit" value="Send !" />
      </div>
    </fieldset>
  </form>
</div>
  
      )
  }    
}

  export default FormMovie;
