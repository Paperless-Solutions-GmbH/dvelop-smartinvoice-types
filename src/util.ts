import { transferSchema, type Transfer } from "./types";

/**
 * Parses a JSON object into a Transfer object.
 *
 * @param json The JSON object to parse.
 * @returns A valid Transfer object
 * @throws {ZodError} If the JSON object does not conform to the Transfer schema.
 */
export const parseTransfer = (json: unknown): Transfer => {
  return transferSchema.parse(json);
};
