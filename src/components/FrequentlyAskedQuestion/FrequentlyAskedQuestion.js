import React from 'react';

const FrequentlyAskedQuestion = () => {
    return (
        <div className="container pt-3 mb-5">

            <div className=" d-flex justify-content-center  align-items-center ">
                <div className="text-center mt-4 w-50 pt-3">
                    <h2 className="display-6 fw-bold">Frequently Asked Questions</h2>
                    <p className="text-muted ">The following list provides answers to the most common questions asked by instructors
                    </p>
                </div>

            </div>

            <div className="mt-4 d-flex justify-content-center">
                <div className="accordion w-75" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item ">
                        <h2 className=" accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button fw-bold " type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne">
                                How Does React Work?
                            </button>
                        </h2>

                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body text-muted">
                                <strong> One of the biggest advantages of using React is</strong>  that you can infuse HTML code with JavaScript.Users can create a representation of a DOM node by declaring the Element function in React.Instead of using the traditional DOM class, React uses className.

                                JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.

                                In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page.Whenever a React component returns an element, the Virtual DOM will update the real DOM to match.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed fw-bold text-dark" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseTwo">
                                What are the differences between States And Props?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body text-muted">
                                <strong> The basic difference between States and Props

                                </strong> is that In Props the data is passed from one component to another and in States the data is  passed within the component only.Props is Immutable (cannot be modified).	and States is Mutable ( can be modified).Props can be used with state and functional components.On the Other Hand,State can be used only with the state components/class component.Props are read-only and State is both read and write.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed  fw-bold text-dark" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseThree">
                                What are the works of useEffect besides Data Loading?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body text-muted">
                                <strong>Besides data loading the works of useEffect is::</strong> <ul><li>Running on state change:validating input field. </li></ul>Validating an input while it's receiving characters is another great application for useEffect. Whilst the input is being stored in a state using useState, the validation takes place every time the input changes, giving immediate feedback to the user.
                                <ul><li>Running on state change: live filtering.</li> </ul>
                                We can use useEffect to filter an array "on the fly" by typing letters into an input element. To do so, we will need to use a state to save the input, and a filter implementation inside the useEffect that will be triggered when the input changes, thanks to useEffect dependencies.
                                <ul><li>Running on state change: trigger animation on new array value</li> </ul>
                                We can use the useEffect hook to trigger an animation on a shopping cart as a side effect of adding a new product to it. In this case, we'll need a state to handle the cart items, and another state to handle the animation trigger.

                            </div>
                        </div>
                    </div>
                     
                </div>

            </div>

        </div>
    );
};

export default FrequentlyAskedQuestion;