import {
  TestAllTypesProto3,
  TestAllTypesProto3_NestedMessage,
} from "./gen/google/protobuf/test_messages_proto3_pb.js";
import { testMT } from "./helpers.js";

describe("constructor", function () {
  test("takes partial message for oneof field", () => {
    const m = new TestAllTypesProto3({
      oneofField: {
        case: "oneofNestedMessage",
        value: {
          corecursive: {
            optionalInt32: 123,
          },
        },
      },
    });
    expect(m.oneofField.case).toBe("oneofNestedMessage");
    if (m.oneofField.case === "oneofNestedMessage") {
      expect(m.oneofField.value.a).toBe(0);
      expect(m.oneofField.value.corecursive).not.toBeUndefined();
      expect(m.oneofField.value.corecursive?.optionalInt32).toBe(123);
    }
  });

  test("takes partial message for map value", () => {
    const m = new TestAllTypesProto3({
      mapStringNestedMessage: {
        key: {
          corecursive: {
            optionalInt32: 123,
          },
        },
      },
    });
    expect(m.mapStringNestedMessage["key"]).toBeDefined();
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (m.mapStringNestedMessage["key"] !== undefined) {
      expect(m.mapStringNestedMessage["key"].a).toBe(0);
      expect(m.mapStringNestedMessage["key"].corecursive).not.toBeUndefined();
      expect(m.mapStringNestedMessage["key"].corecursive?.optionalInt32).toBe(
        123
      );
    }
  });

  testMT(TestAllTypesProto3, (messageType) => {
    const t = new messageType({
      optionalNestedMessage: {
        a: 123,
        corecursive: {
          optionalNestedMessage: {
            a: 456,
            corecursive: {
              optionalNestedMessage: {},
            },
          },
        },
      },
      repeatedNestedMessage: [
        {
          a: 123,
          corecursive: {
            repeatedNestedMessage: [
              {
                a: 456,
                corecursive: {
                  repeatedNestedMessage: [{}],
                },
              },
            ],
          },
        },
      ],
      mapStringString: {
        a: "A",
      },
      oneofField: {
        case: "oneofNestedMessage",
        value: new TestAllTypesProto3_NestedMessage(),
      },
    });
    expect(t.optionalNestedMessage?.a).toBe(123);
    expect(t.optionalNestedMessage?.corecursive?.optionalNestedMessage?.a).toBe(
      456
    );
    expect(
      t.optionalNestedMessage?.corecursive?.optionalNestedMessage?.corecursive
        ?.optionalNestedMessage?.a
    ).toBe(0);
    expect(t.repeatedNestedMessage.length).toBe(1);
    expect(t.repeatedNestedMessage[0]?.a).toBe(123);
    expect(
      t.repeatedNestedMessage[0]?.corecursive?.repeatedNestedMessage[0]?.a
    ).toBe(456);
    expect(
      t.repeatedNestedMessage[0]?.corecursive?.repeatedNestedMessage[0]
        ?.corecursive?.repeatedNestedMessage[0]?.a
    ).toBe(0);
  });
});