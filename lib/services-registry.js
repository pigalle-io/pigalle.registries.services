/**
 * This file is part of pigalle.registries.services
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module services-registry
 * @description
 * @example
 *
 * const {ServicesRegistry} = require('@pigalle/registries.services')
 * const {ServiceEntity} = require('@pigalle/entities.service')
 *
 * const registry = ServiceRegistry.factory()
 *
 * const authenticationService = ServiceEntity.factory()
 * const helloService = ServiceEntity.factory()
 *
 * registry.add(authenticationService)
 * registry.add(helloService)
 *
 */

const {RegistryBase} = require('@pigalle/registries.base')
const {ServiceEntity} = require('@pigalle/entities.service')

/**
 * A services registry for the Pigalle framework.
 *
 * @class
 * @public
 */
class ServicesRegistry extends RegistryBase {
  /**
   * Create a new instance of {ServicesRegistry}
   *
   * @param args - The arguments.
   * @constructor
   * @public
   */
  constructor (...args) {
    super(ServiceEntity, ...args)
  }
}

module.exports = {}
module.exports.ServicesRegistry = ServicesRegistry
