// Copyright 2020-2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.0.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file buf/alpha/breaking/v1/config.proto (package buf.alpha.breaking.v1, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Config represents the breaking change configuration for a module. The rule and category IDs are defined
 * by the version and apply across the config. The version is independent of the version of
 * the package. The package version refers to the config shape, the version encoded in the Config message
 * indicates which rule and category IDs should be used.
 *
 * The rule and category IDs are not encoded as enums in this package because we may want to support custom rule
 * and category IDs in the future. Callers will need to resolve the rule and category ID strings.
 *
 * @generated from message buf.alpha.breaking.v1.Config
 */
export class Config extends Message<Config> {
  /**
   * version represents the version of the breaking change rule and category IDs that should be used with this config.
   *
   * @generated from field: string version = 1;
   */
  version = "";

  /**
   * use_ids lists the rule and/or category IDs that are included in the breaking change check.
   *
   * @generated from field: repeated string use_ids = 2;
   */
  useIds: string[] = [];

  /**
   * except_ids lists the rule and/or category IDs that are excluded from the breaking change check.
   *
   * @generated from field: repeated string except_ids = 3;
   */
  exceptIds: string[] = [];

  /**
   * ignore_paths lists the paths of directories and/or files that should be ignored by the breaking change check.
   * All paths are relative to the root of the module.
   *
   * @generated from field: repeated string ignore_paths = 4;
   */
  ignorePaths: string[] = [];

  /**
   * ignore_id_paths is a map of rule and/or category IDs to directory and/or file paths to exclude from the
   * breaking change check. This corresponds with the ignore_only configuration key.
   *
   * @generated from field: repeated buf.alpha.breaking.v1.IDPaths ignore_id_paths = 5;
   */
  ignoreIdPaths: IDPaths[] = [];

  /**
   * ignore_unstable_packages ignores packages with a last component that is one of the unstable forms recognised
   * by the PACKAGE_VERSION_SUFFIX:
   *   v\d+test.*
   *   v\d+(alpha|beta)\d+
   *   v\d+p\d+(alpha|beta)\d+
   *
   * @generated from field: bool ignore_unstable_packages = 6;
   */
  ignoreUnstablePackages = false;

  constructor(data?: PartialMessage<Config>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "buf.alpha.breaking.v1.Config";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "use_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "except_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "ignore_paths", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "ignore_id_paths", kind: "message", T: IDPaths, repeated: true },
    { no: 6, name: "ignore_unstable_packages", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Config {
    return new Config().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Config {
    return new Config().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Config {
    return new Config().fromJsonString(jsonString, options);
  }

  static equals(a: Config | PlainMessage<Config> | undefined, b: Config | PlainMessage<Config> | undefined): boolean {
    return proto3.util.equals(Config, a, b);
  }
}

/**
 * IDPaths represents a rule or category ID and the file and/or directory paths that are ignored for the rule.
 *
 * @generated from message buf.alpha.breaking.v1.IDPaths
 */
export class IDPaths extends Message<IDPaths> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: repeated string paths = 2;
   */
  paths: string[] = [];

  constructor(data?: PartialMessage<IDPaths>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "buf.alpha.breaking.v1.IDPaths";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "paths", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IDPaths {
    return new IDPaths().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IDPaths {
    return new IDPaths().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IDPaths {
    return new IDPaths().fromJsonString(jsonString, options);
  }

  static equals(a: IDPaths | PlainMessage<IDPaths> | undefined, b: IDPaths | PlainMessage<IDPaths> | undefined): boolean {
    return proto3.util.equals(IDPaths, a, b);
  }
}

