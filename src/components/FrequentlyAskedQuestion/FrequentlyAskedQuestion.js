import React from 'react';

const FrequentlyAskedQuestion = () => {
    return (
        <div class="container pt-3 mb-5">
            
                <div class=" d-flex justify-content-center  align-items-center ">
                    <div class="text-center mt-4 w-50 pt-3">
                        <h2 class="display-6 fw-bold">Frequently Asked Questions</h2>
                        <p class="text-muted ">The following list provides answers to the most common questions asked by instructors
                            regarding digital learning</p>
                    </div>

                </div>

                <div class="mt-4 d-flex justify-content-center">
                    <div class="accordion w-75" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item ">
                            <h2 class=" accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button fw-bold " type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                    aria-controls="panelsStayOpen-collapseOne">
                                    What are the differences between flex box and grid?
                                </button>
                            </h2>

                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                                aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body text-muted">
                                    <strong> The basic difference between CSS Grid Layout and CSS Flexbox Layout</strong> is that flexbox
                                    was designed for layout in one dimension - either a row or a column. Grid was designed for
                                    two-dimensional layout - rows, and columns at the same time.Major Uniqueness between Flexbox and Grids
                                    is that the former works on content while the latter is based on the layout.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                <button class="accordion-button collapsed fw-bold text-dark" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseTwo">
                                    What are the differences between Bootstrap and Tailwind CSS?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingTwo">
                                <div class="accordion-body text-muted">
                                    <strong> The basic difference between Bootstrap and Tailwind CSS

                                    </strong> is that Tailwind offers predesigned widgets to build a site from scratch with fast UI
                                    development and Bootstrap comes with a set of pre-styled responsive, mobile-first components that
                                    possess a definite UI kit.Tailwind CSS uses a set of utility classes to create a neat UI with more
                                    flexibility and uniqueness.On the other hand,Sites created using Bootstrap follow the generic pattern
                                    that makes them look identical.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                <button class="accordion-button collapsed  fw-bold text-dark" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseThree">
                                    What is CSS Box Model?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingThree">
                                <div class="accordion-body text-muted">
                                    <strong>The CSS box model</strong> is a container that contains multiple properties including borders,
                                    margin, padding, and the content itself. It is used to create the design and layout of web pages. It can
                                    be used as a toolkit for customizing the layout of different elements.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                                <button class="accordion-button collapsed  fw-bold text-dark" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseFour">
                                    What are Semantic Elements?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingFour">
                                <div class="accordion-body text-muted">
                                    <strong> Semantic HTML elements are those that clearly describe their meaning in a human- and
                                        machine-readable way.</strong> Elements such as &ltheader&gt, &ltfooter&gtand &ltarticle&gt are all
                                    considered semantic because they accurately describe the purpose of the element and the type of content
                                    that is inside them.Some semantic elements added in HTML5 are:&ltarticle&gt,&ltaside&gt,
                                    &ltdetails&gt,&ltnav&gt,&ltheader&gt,&ltfigcaption&gt,&ltfigure&gt,&ltfooter&gt
                                    ,&ltmain&gt,&ltmark&gt,&ltsection&gt,&ltsummary&gt,&lttime&gt.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
             
        </div>
    );
};

export default FrequentlyAskedQuestion;