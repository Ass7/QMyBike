/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	// Application Constructor
	initialize : function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents : function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicity call 'app.receivedEvent(...);'
	onDeviceReady : function() {
		app.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	receivedEvent : function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		// Start Proto QEO

		console.log('Starting QEO tests');

		var factoryOptions = {
			"manifest" : com_astebbot_rally_cycling_Cat_Manifest
		};

		// create a Qeo factory. Pass the manifest file as an option.
		Qeo
				.createFactory(factoryOptions)
				.then(
						function(factory) {
							// creation of the factory is asynchronous. This
							// function will be
							// called when the factory is created.
							// factory created!

							// now create the readers and writer.
							// this also is asynchronous and will return a
							// promise.

							// CP

							var promisedCPWriter = factory
									.createEventWriter("com::bemybikerally::bike::CheckPoint");
							console.log('CP writer is created.');
							var promisedCPReader = factory
									.createEventReader("com::bemybikerally::bike::CheckPoint");
							console.log('CP reader is created.');
							promisedCPWriter.then(function(writer) {
								// writer is created.
								$("#send").click(function() {
									// add hook to the send button.
									var data = {
										'checkPointId' : $('#checkPointId').val(),
										'enigma' : $('#enigma').val()
									};
									writer.write(data);
								});
							}, function(error) {
								// error in writer creation.
								console.log('error in CP writer creation.');
								console.error(error);
								console.trace(error);
								alert(error);
							});
						
							promisedCPReader.then(function(reader) {
								 reader.on("data",function (data) {
						                //handle read events.
						                $('#output').append('<div class="message"><span class="username">' + data.checkPointId + '</span><span class="messagetext">'+data.enigma+'</span></div>');
						                $('#output').scrollTop($('#output').get(0).scrollHeight);
						            });

							}, function(error) {
								// error in reader creation.
								console.log('error in CP reader creation.');
								console.error(error);
								alert(error);
							});

// Mode Manifest -----------------------------------------------------------------------------------------------------------------
							
							// Mf
							var promisedMFWriter = factory
									.createEventWriter("com::bemybikerally::bike::Manifest");
							var promisedMFReader = factory
									.createEventReader("com::bemybikerally::bike::Manifest");
							promisedMFWriter.then(function(writer) {
								// writer is created.
								console.log('MF writer is created.');
							}, function(error) {
								// error in writer creation.
								console.log('error in MF writer creation.');
							});

							promisedMFReader.then(function(reader) {Point
								// reader is created.
								console.log('MF reader is created.');
							}, function(error) {
								// error in reader creation.
								console.log('error in MF reader creation.');
							});
							// End Block Start Proto QEO
						}, function(error) {
							// error in factory creation.
						});
// Fin Mode Manifest (pour plus tard) -----------------------------------------------------------------------------------------------------------------
		
		listeningElement.setAttribute('style',
		'display:none;');
		receivedElement.setAttribute('style',
		'display:block;');
		
		console.log('Document cleanup');
		//----------------------------------
		// Reload document => cleanup
		//----------------------------------
		window.addEventListener('unload', function() {Qeo.cleanup();});


		console.log('Received Event: ' + id);
	}

};
