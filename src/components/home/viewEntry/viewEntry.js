import React, { Component } from 'react';

class viewEntry extends Component {

      componentDidMount() {
            const d = new Date();
            let dateTimeText = d.toString();
            document.getElementById("dateTime").innerHTML = dateTimeText
      }

      render() {
            return (
                  <div className="entry-view-container">

                        {/* Prototype */}
                        <h2>Sample Entry Title</h2>
                        <p className>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nibh mi. Proin sollicitudin sollicitudin nisl, et consectetur lorem maximus quis. Quisque eget dapibus lectus. Integer lorem tortor, fringilla nec libero non, lacinia ornare risus. Curabitur tempus, libero sed feugiat tempor, ligula arcu laoreet odio, feugiat gravida arcu leo a urna. Vivamus arcu dolor, fringilla pulvinar arcu eget, finibus eleifend orci. Curabitur auctor vel tortor a congue. Praesent placerat feugiat felis, vel dapibus tellus accumsan sit amet. Suspendisse vulputate, risus eget porta congue, orci urna dapibus nibh, a iaculis lacus mauris at odio. Etiam id odio non felis rhoncus malesuada id vitae leo. Cras eu dui mauris. Vivamus consectetur hendrerit velit, a vulputate urna tristique et. Phasellus sodales, tortor non imperdiet tristique, mi ante malesuada neque, eget luctus nisl quam non mi.

                              Aliquam posuere tortor eget ipsum fermentum, et dapibus erat placerat. Morbi eget interdum sapien. Praesent sagittis est dui, nec euismod enim laoreet nec. Praesent hendrerit, metus eget tincidunt lobortis, nisl lectus bibendum velit, sit amet luctus lacus mi eu felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque luctus fermentum nisi ut venenatis. Sed tempus finibus dictum. Sed placerat erat non rhoncus tristique. Pellentesque at feugiat felis, sit amet dictum augue. Sed semper leo et lacus posuere rutrum. Aenean sed maximus ipsum. Maecenas diam nisi, sodales et nisi in, accumsan egestas felis. Nulla facilisi. Aenean rhoncus, felis at sodales fermentum, lorem lorem porttitor urna, id gravida massa dolor nec nibh.

                              Aenean non urna semper, euismod erat nec, ultrices justo. Maecenas lacinia malesuada commodo. Curabitur nibh sem, blandit at iaculis at, ultrices et felis. Cras neque tellus, bibendum sed placerat sed, condimentum at ipsum. Nullam ultrices nulla et justo dictum dignissim. Vivamus cursus lacinia lorem. Duis tincidunt pellentesque nibh eget varius. Integer et ipsum ac ex rhoncus consectetur. Vivamus ut ultricies orci. Nullam mollis ante eu magna pellentesque venenatis. Maecenas in suscipit mi.

                              Aenean tempor sed sem eu faucibus. Morbi at massa in sapien interdum lobortis nec et magna. Etiam enim felis, sagittis nec tristique nec, porta et leo. Maecenas convallis sem eu neque mattis pulvinar. Nullam blandit vehicula laoreet. Duis bibendum lorem quam, tempor vulputate turpis suscipit quis. Etiam neque lectus, finibus a enim sit amet, condimentum consequat turpis. Cras nec tortor dignissim eros interdum lobortis sed id urna. Quisque mollis fringilla nisi, id lacinia urna eleifend sollicitudin. In ac mollis lacus. Nunc posuere mollis tincidunt. Morbi vitae eros non sapien venenatis aliquam ac nec enim.

                              Aliquam erat volutpat. Suspendisse vulputate egestas eros, id fermentum neque egestas quis. Donec vitae augue dui. Nullam libero felis, aliquet nec ullamcorper in, bibendum in lorem. Cras non tempor purus. Donec posuere odio at tempus feugiat. Nam dignissim interdum nisl ut viverra. Proin faucibus ultricies orci sed volutpat.
                        </p>
                        <p id="dateTime"></p>

                  </div>
            );
      }
}

export default viewEntry;