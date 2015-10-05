/* CURRENTLY IN: javascript/main.js */


// var myNodes = new vis.DataSet([]);

// var myEdges = new vis.DataSet([]);

// function addNode( id , label ){
// 	var newNode = 
// }


 // create an array with nodes
    var nodes = new vis.DataSet([
        {id: 1, label: 'Node 1'},
        {id: 2, label: 'Node 2'},
        {id: 3, label: 'Node 3'},
        {id: 4, label: 'Node 4'},
        {id: 5, label: 'Node 5'}
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 1, to: 3},
        {from: 1, to: 2},
        {from: 2, to: 4},
        {from: 2, to: 5}
    ]);

    // create a network
    var container = document.getElementById('mynetwork');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};

    // initialize your network!
    var network = new vis.Network(container, data, options);


// // create an array with nodes
//       var nodes = new vis.DataSet([
//         {id: 1, label: 'Node 1'},
//         {id: 2, label: 'Node 2'},
//         {id: 3, label: 'Node 3'},
//         {id: 4, label: 'Node 4'},
//         {id: 5, label: 'Node 5'}
//       ]);

//       // create an array with edges
//       var edges = new vis.DataSet([
//         {from: 5, to: 3},
//         {from: 3, to: 2},
//         {from: 2, to: 4},
//         {from: 2, to: 5}
//       ]);


//       // create a network
//       var container = document.getElementById('mynetwork');
//       // var data = {
//       //   nodes: null,
//       //   edges: null
//       // };
//       var options = {};
//       var network = new vis.Network(container, data, options);


// function updateNetwork() {
// 	network.setData({
// 		nodes: nodes,
// 		edges: edges
// 	});

// 	console.log( nodes, edges )
// }

// var nodes = [];
// var edges = [];
// var i = 0;
// $('.button').on('click', function() {
// 	nodes.push({
// 		id: i,
// 		label: 'HELLO + ' + i
// 	});

// 	if ( i > 0 ) {
// 		edges.push({
// 			from: i-1,
// 			to: i
// 		});
// 	}

// 	updateNetwork();

// 	i++;

// });

// // list of all options
// var options = {
//   autoResize: true,
//   height: '100%',
//   width: '100%',
//   locale: 'en',
//   clickToUse: false,
//   // configure: {...},    // defined in the configure module.
//   // edges: {...},        // defined in the edges module.
//   // nodes: {...},        // defined in the nodes module.
//   // groups: {...},       // defined in the groups module.
//   // layout: {...},       // defined in the layout module.
//   // interaction: {...},  // defined in the interaction module.
//   // manipulation: {...}, // defined in the manipulation module.
//   // physics: {...},      // defined in the physics module.
// }


// network.setOptions(options);

// // network.setData({
// // 	nodes: vis.DataSet([
// // 		{ id: "Hello, Wrold", label: "Hello, Wrold"},
// // 		{ id: "My name is...", label: "My name is..."},
// // 	]),
// // 	edges: vis.DataSet([
// // 		{ from: "Hello, Wrold", to: "My name is..."},
// // 	])
// // });

// var options = {
//   configure: {
//     enabled: true,
//     filter: 'nodes,edges',
//     container: document.getElementById("container"),
//     showButton: true
//   }
// }

// console.log(network);
// // console.log(data.nodes.I);
// console.log(nodes);
// console.log(data.edges);
// console.log(edges);

// var options = {
//   manipulation: {
//     enabled: true,
//     initiallyActive: false,
//     addNode: true,
//     addEdge: true,
//     editEdge: true,
//     deleteNode: true,
//     deleteEdge: true,
//     controlNodeStyle:{
//       // all node options are valid.
//     }
//   }
// }

// console.log($('.vis-manipulation'));

// $('.vis-manipulation').css('background-color', 'pink');
// // $('.vis-manpulation').background('transparent');


// network.setOptions(options);


// // network.getOptionsFromConfigurator();



// $('.button').on('click', function(){

//   $('.text-field__container').animate({top: "150px"}, 2000);

// });



