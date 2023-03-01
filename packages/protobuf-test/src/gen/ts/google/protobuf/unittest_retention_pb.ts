// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

// @generated by protoc-gen-es v1.0.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file google/protobuf/unittest_retention.proto (package protobuf_unittest, syntax proto2)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto2 } from "@bufbuild/protobuf";

/**
 * @generated from enum protobuf_unittest.TopLevelEnum
 */
export enum TopLevelEnum {
  /**
   * @generated from enum value: TOP_LEVEL_UNKNOWN = 0;
   */
  TOP_LEVEL_UNKNOWN = 0,
}
// Retrieve enum metadata with: proto2.getEnumType(TopLevelEnum)
proto2.util.setEnumType(TopLevelEnum, "protobuf_unittest.TopLevelEnum", [
  { no: 0, name: "TOP_LEVEL_UNKNOWN" },
]);

/**
 * Retention attributes set on fields nested within a message
 *
 * @generated from message protobuf_unittest.OptionsMessage
 */
export class OptionsMessage extends Message<OptionsMessage> {
  /**
   * @generated from field: optional int32 plain_field = 1;
   */
  plainField?: number;

  /**
   * @generated from field: optional int32 runtime_retention_field = 2;
   */
  runtimeRetentionField?: number;

  /**
   * @generated from field: optional int32 source_retention_field = 3;
   */
  sourceRetentionField?: number;

  constructor(data?: PartialMessage<OptionsMessage>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "protobuf_unittest.OptionsMessage";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "plain_field", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "runtime_retention_field", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "source_retention_field", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OptionsMessage {
    return new OptionsMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OptionsMessage {
    return new OptionsMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OptionsMessage {
    return new OptionsMessage().fromJsonString(jsonString, options);
  }

  static equals(a: OptionsMessage | PlainMessage<OptionsMessage> | undefined, b: OptionsMessage | PlainMessage<OptionsMessage> | undefined): boolean {
    return proto2.util.equals(OptionsMessage, a, b);
  }
}

/**
 * @generated from message protobuf_unittest.Extendee
 */
export class Extendee extends Message<Extendee> {
  constructor(data?: PartialMessage<Extendee>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "protobuf_unittest.Extendee";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Extendee {
    return new Extendee().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Extendee {
    return new Extendee().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Extendee {
    return new Extendee().fromJsonString(jsonString, options);
  }

  static equals(a: Extendee | PlainMessage<Extendee> | undefined, b: Extendee | PlainMessage<Extendee> | undefined): boolean {
    return proto2.util.equals(Extendee, a, b);
  }
}

/**
 * @generated from message protobuf_unittest.TopLevelMessage
 */
export class TopLevelMessage extends Message<TopLevelMessage> {
  /**
   * @generated from field: optional float f = 1;
   */
  f?: number;

  /**
   * @generated from oneof protobuf_unittest.TopLevelMessage.o
   */
  o: {
    /**
     * @generated from field: int64 i = 2;
     */
    value: bigint;
    case: "i";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<TopLevelMessage>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "protobuf_unittest.TopLevelMessage";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "f", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
    { no: 2, name: "i", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "o" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TopLevelMessage {
    return new TopLevelMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TopLevelMessage {
    return new TopLevelMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TopLevelMessage {
    return new TopLevelMessage().fromJsonString(jsonString, options);
  }

  static equals(a: TopLevelMessage | PlainMessage<TopLevelMessage> | undefined, b: TopLevelMessage | PlainMessage<TopLevelMessage> | undefined): boolean {
    return proto2.util.equals(TopLevelMessage, a, b);
  }
}

/**
 * @generated from enum protobuf_unittest.TopLevelMessage.NestedEnum
 */
export enum TopLevelMessage_NestedEnum {
  /**
   * @generated from enum value: NESTED_UNKNOWN = 0;
   */
  NESTED_UNKNOWN = 0,
}
// Retrieve enum metadata with: proto2.getEnumType(TopLevelMessage_NestedEnum)
proto2.util.setEnumType(TopLevelMessage_NestedEnum, "protobuf_unittest.TopLevelMessage.NestedEnum", [
  { no: 0, name: "NESTED_UNKNOWN" },
]);

/**
 * @generated from message protobuf_unittest.TopLevelMessage.NestedMessage
 */
export class TopLevelMessage_NestedMessage extends Message<TopLevelMessage_NestedMessage> {
  constructor(data?: PartialMessage<TopLevelMessage_NestedMessage>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "protobuf_unittest.TopLevelMessage.NestedMessage";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TopLevelMessage_NestedMessage {
    return new TopLevelMessage_NestedMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TopLevelMessage_NestedMessage {
    return new TopLevelMessage_NestedMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TopLevelMessage_NestedMessage {
    return new TopLevelMessage_NestedMessage().fromJsonString(jsonString, options);
  }

  static equals(a: TopLevelMessage_NestedMessage | PlainMessage<TopLevelMessage_NestedMessage> | undefined, b: TopLevelMessage_NestedMessage | PlainMessage<TopLevelMessage_NestedMessage> | undefined): boolean {
    return proto2.util.equals(TopLevelMessage_NestedMessage, a, b);
  }
}
