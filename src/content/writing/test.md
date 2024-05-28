---
title: "An Introduction to MathML: Basic Examples and Usage"
excerpt: "Learn how to integrate simple mathematical expressions into your web content using MathML."
date: "2024-05-27"
image: "/public/images/react-server-components.webp"
slug: "introduction-to-mathml"
---

## Inline Math

This is an inline math expression: <math xmlns="http://www.w3.org/1998/Math/MathML">
<msup><mi>E</mi><mn>2</mn></msup>
<mo>=</mo>
<mi>m</mi><msup><mi>c</mi><mn>2</mn></msup>
</math>.

## Display Math

This is a displayed math expression:
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
<msubsup>
<mo>∫</mo>
<mn>0</mn>
<mn>1</mn>
</msubsup>
<msup><mi>x</mi><mn>2</mn></msup>
<mo>dx</mo>
<mo>=</mo>
<mfrac><mn>1</mn><mn>3</mn></mfrac>
</math>

## Complex Equation

Here is a more complex equation:
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
<mtable columnalign="right left" rowspacing="3pt" columnspacing="0 thickmathspace">
<mtr>
<mtd>
<mrow>
<mo>∇⋅</mo>
<mi>E</mi>
</mrow>
</mtd>
<mtd>
<mrow>
<mo>=</mo>
<mfrac><mi>ρ</mi><mi>ε₀</mi></mfrac>
</mrow>
</mtd>
</mtr>
<mtr>
<mtd>
<mrow>
<mo>∇⋅</mo>
<mi>B</mi>
</mrow>
</mtd>
<mtd>
<mrow>
<mo>=</mo>
<mn>0</mn>
</mrow>
</mtd>
</mtr>
<mtr>
<mtd>
<mrow>
<mo>∇×</mo>
<mi>E</mi>
</mrow>
</mtd>
<mtd>
<mrow>
<mo>=</mo>
<mo>-</mo>
<mfrac><mo>∂</mo><mo>∂t</mo></mfrac>
<mi>B</mi>
</mrow>
</mtd>
</mtr>
<mtr>
<mtd>
<mrow>
<mo>∇×</mo>
<mi>B</mi>
</mrow>
</mtd>
<mtd>
<mrow>
<mo>=</mo>
<mfrac><mn>μ₀</mn><mi>J</mi></mfrac>
<mo>+</mo>
<mfrac><mn>μ₀</mn><mi>ε₀</mi></mfrac>
<mfrac><mo>∂</mo><mo>∂t</mo></mfrac>
<mi>E</mi>
</mrow>
</mtd>
</mtr>
</mtable>
</math>

## Quadratic Formula

The quadratic formula is given by:
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
<mi>x</mi>
<mo>=</mo>
<mfrac>
<mrow>
<mo>-</mo>
<mi>b</mi>
<mo>±</mo>
<msqrt>
<msup><mi>b</mi><mn>2</mn></msup>
<mo>-</mo>
<mn>4</mn>
<mi>a</mi>
<mi>c</mi>
</msqrt>
</mrow>
<mrow>
<mn>2</mn>
<mi>a</mi>
</mrow>
</mfrac>
</math>

## Summation and Product Notation

Summation notation:
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
<munderover>
<mo>∑</mo>
<mrow>
<mi>i</mi>
<mo>=</mo>
<mn>1</mn>
</mrow>
<mi>n</mi>
</munderover>
<mi>i</mi>
<mo>=</mo>
<mfrac>
<mrow>
<mi>n</mi>
<mo>(</mo>
<mi>n</mi>
<mo>+</mo>
<mn>1</mn>
<mo>)</mo>
</mrow>
<mn>2</mn>
</mfrac>
</math>

Product notation:
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
<munderover>
<mo>∏</mo>
<mrow>
<mi>i</mi>
<mo>=</mo>
<mn>1</mn>
</mrow>
<mi>n</mi>
</munderover>
<mi>i</mi>
<mo>=</mo>
<mi>n</mi><mo>!</mo>
</math>
