'use server'
import { sql } from '@vercel/postgres';

export async function checkEntry(ighandle) {
	console.log(`Checking entry for ${ighandle}`)
	let contest_date = '2024-07-07'
	var response = await sql`
		SELECT * FROM entries
 		WHERE ighandle=${ighandle} AND contest_date=${contest_date}
	`;
	console.log(`Response row count: ${response.rowCount}`)
	
	return response.rowCount == 0;
}

export async function saveEntry(formData) {
	console.log('Saving entry')

	let verified = false;
	let won = false;
	let contest_date = '2024-07-07'

	await sql`
 		INSERT INTO entries (name, ighandle, verified, won, contest_date)
 		VALUES (${formData.name}, ${formData.ighandle}, ${verified}, ${won}, ${contest_date} )
	`;
}