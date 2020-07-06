/*
 * Copyright (c) 2010-2020 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */

exports.getTemplate = function (parameters) {
    return {
        name: "Application - DAO",
        description: "Application with DAO",
        extension: "model",
        sources: [{
            location: "/template-application-dao/data/dao/entity.js.template",
            action: "generate",
            rename: "data/dao/{{perspectiveName}}/{{fileName}}.js",
            engine: "velocity",
            collection: "models"
        }, {
            location: "/template-application-dao/data/utils/EntityUtils.js.template",
            action: "copy",
            rename: "data/utils/EntityUtils.js"
        }],
        parameters: []
    };
};