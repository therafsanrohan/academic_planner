import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const url = formData.get('url');

    if (!file && !url) {
      return NextResponse.json(
        { error: 'Please provide either a PDF file or a public URL.' },
        { status: 400 }
      );
    }

    // Simulate AI extraction delay (e.g., OCR processing + LLM structuring)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock extracted structured data
    const extractedData = {
      programmeRequirement: 138,
      courses: [
        {
          id: 'mock-1',
          code: 'CSE 1111',
          title: 'Structured Programming Language',
          credits: 3.0,
          category: 'Core',
          suggestedTrimester: 1,
          prerequisites: [],
          status: 'Completed',
          grade: 'A-',
          confidence: 0.98,
        },
        {
          id: 'mock-2',
          code: 'CSE 1112',
          title: 'Structured Programming Language Lab',
          credits: 1.0,
          category: 'Core',
          suggestedTrimester: 1,
          prerequisites: [],
          status: 'Completed',
          grade: 'A',
          confidence: 0.99,
        },
        {
          id: 'mock-3',
          code: 'MAT 1102',
          title: 'Calculus I',
          credits: 3.0,
          category: 'Core',
          suggestedTrimester: 1,
          prerequisites: [],
          status: 'Retake',
          grade: 'F',
          confidence: 0.85,
        },
        {
          id: 'mock-4',
          code: 'CSE 2217',
          title: 'Data Structures',
          credits: 3.0,
          category: 'Core',
          suggestedTrimester: 3,
          prerequisites: ['CSE 1115'],
          status: 'Not Started',
          grade: null,
          confidence: 0.72, // Low confidence example
          warning: 'Could not clearly confirm the prerequisite. Please review before saving.',
        },
      ],
    };

    return NextResponse.json({ success: true, data: extractedData });
  } catch (error) {
    console.error('Extraction Error:', error);
    return NextResponse.json(
      { error: 'An error occurred during extraction.' },
      { status: 500 }
    );
  }
}
