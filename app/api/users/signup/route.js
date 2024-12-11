import { NextResponse } from 'next/server';
import clientPromise from '@/lib/database';  

export async function POST(req) {
  try {
    const client = await clientPromise;  // Wait for the connection
    const db = client.db();  // Get the database instance (replace with your DB name)
    const usersCollection = db.collection('users'); // Use the collection

    const { username, email, password } = await req.json();

    // Insert the new user
    const result = await usersCollection.insertOne({ username, email, password });

    return NextResponse.json({ message: 'User created successfully', userId: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
  }
}

