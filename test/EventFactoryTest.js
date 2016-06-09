/*
 * This file is part of IMS Caliper Analytics™ and is licensed to
 * IMS Global Learning Consortium, Inc. (http://www.imsglobal.org)
 * under one or more contributor license agreements.  See the NOTICE
 * file distributed with this work for additional information.
 *
 * IMS Caliper is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * IMS Caliper is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License along
 * with this program. If not, see http://www.gnu.org/licenses/.
 */

var test = require('tape');
var _ = require('lodash');
var util = require('util');
var jsonCompare = require('./testUtils');

var context = require('../src/context/context');
var entityFactory = require('../src/entities/entityFactory');
var entityType = require('../src/entities/entityType');
var eventFactory = require('../src/events/eventFactory');
var eventType = require('../src/events/eventType');
var mediaObjectType = require('../src/entities/media/mediaObjectType');
var videoObject = require('../src/entities/media/videoObject');

test('Create minimal VideoObject create event using the eventFactory and validate attributes', function (t) {

  // Plan for N assertions
  t.plan(1);

  // The Actor for the Caliper Event
  var actorId = "https://example.edu/user/554433";
  var actor = entityFactory().create(entityType.PERSON, actorId);

  // The Action for the Caliper Event
  var action = "http://purl.imsglobal.org/vocab/caliper/v1/action#Created";

  // The Object being interacted with by the Actor
  var objId = "https://example.com/super-media-tool/video/6779";
  var obj = entityFactory().create(mediaObjectType.VIDEO_OBJECT, objId);

  // Assert that key attributes are the same
  var event = eventFactory().create(context.CONTEXT, eventType.EVENT, {
    actor: actor,
    action: action,
    object: obj,
    eventTime: new Date("2015-09-15T10:15:00Z").toISOString()
  });

  // Assert that the JSON produced is the same
  jsonCompare('caliperEventMinimalCreated', event, t);
});