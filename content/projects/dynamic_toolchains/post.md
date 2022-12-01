![A dynamic toolchain for interactive watercolor painting.](/content/projects/dynamic_toolchains/images/brushstrokes.png)

# Dynamic Toolchains

CAD/CAM software for digital fabrication provides a way of converting between different data formats, such as a slicer converting an STL model to G-code.
Traditionally, these programs are built to support a particular workflow.
For example, slicers are designed to enable layer-by-layer 3D printing.
How can we build software that supports many kinds of fabrication workflows, even ones we haven't thought of yet?
How can we minimize the amount of new code we write by taking advantage of existing libraries, design tools, path planning algorithms, machine interfaces, and visualizations?

**Dynamic Toolchains** are reconfigurable programs for digital fabrication where modules are connected in a dataflow environment.
A core goal of this project is _extensibility_: how can we easily integrate existing and new tools into our toolchains?
How can we support multiple common programming languages (and by extension their associated libraries)?
We provide a development framework for contributing new modules, which resemble miniature full-stack web applications written in Python and JavaScript.
The environment handles communication between modules, leaving their actual implementation as open as possible.

I have built a number of example modules and toolchains that support different digital fabrication workflows, including plotted maps, machine knit cellular automata, and CNC milling.
Because modules are event-driven, we can also build _interactive_ machine control interfaces where machine instructions are generated based on user input.
I have prototyped one such interface [for exploring brushstroke patterns for watercolor painting](/projects/watercolor).

I have demonstrated Dynamic Toolchains at two academic conferences (SCF and UIST), and a full paper is currently under review.
Demo abstracts (which are quite similar) are available here: [SCF 2022](/papers/dynamic_toolchains_scf) and [UIST 2022](/papers/dynamic_toolchains_uist).
Source code for the project is available in a [public Github repository](https://github.com/machineagency/planager).
As the project evolves, I am looking to bring in outside collaborators and practitioners.
My eventual goal is to build a module- and toolchain-sharing platform, but I'm only one person!
If you're interested in getting involved, [send me a note!](mailto:hannah@twigg.gg)

## example toolchains

Here are some toolchains I've built in this system.

### automata knits

![A toolchain for converting one-dimensional cellular automata to bitmap images, which can be knit on a machine.](/content/projects/dynamic_toolchains/images/triangles.png)

### plotted maps

The mapping toolchain uses the Mapbox API, d3-geo, and the Axidraw python library to plot maps. Optionally, a JSON editor module (using the codemirror library) can be used to customize the mapbox query for different map features. See more [here](/projects/maps).

![A screenshot of the mapping toolchain, which includes modules for scaling and positioning the map in the Axidraw's work envelope.](/content/projects/maps/mapchain.png)

![A selection of maps plotted with the mapping toolchain.](/content/projects/maps/maps.jpg)

<!-- ### watercolor

### carved panels -->

## some early toolchains

These are examples from the previous version of the system, which was a client-only React implementation. I eventually decided to rewrite the system to have a backend. I could reimplement these but have not gotten around to it yet.

### webcam fun

![A toolchain for vectorizing and plotting pictures taken with a webcam.](/content/projects/dynamic_toolchains/images/workflow.png)

<!-- ### knit graphs

For my final project for a class on computational machine knitting, I prototyped some modules and toolchains for manipulating knit graphs.

![](/content/projects/dynamic_toolchains/images/cables.png)

![](/content/projects/dynamic_toolchains/images/graphs.png)

![](/content/projects/dynamic_toolchains/images/knitting.png) -->

### laboratory protocols

![A very early toolchain where I was exploring different ways of representing protocols for laboratory automation with Jubilee.](/content/projects/dynamic_toolchains/images/sonication.png)
