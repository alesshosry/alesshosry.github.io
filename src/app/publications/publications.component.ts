import { Component } from '@angular/core';


@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent {
  publications = [
    {
      title: "MoTion: A new declarative object matching approach in Pharo",
      conference: "Journal of Computer Languages",
      year: "2024",
      place: "",
      description: "Pattern matching is an expressive way of matching data and extracting pieces of information from it. The recent inclusion of pattern matching in the Java and Python languages highlights that such a facility is more and more adopted by developers for everyday development. Other main stream programming languages also offer pattern matching capabilities as part of the language (Rust, Scala, Haskell, and OCaml), with different degrees of expressivity in what can be matched. In the meantime, in graphs, pattern matching takes a slightly different turn; it enhances the expressivity of the patterns that can be defined. Smalltalk currently offers little pattern matching capability to find specific objects inside a large graph of objects using a declarative pattern. In Pharo, the closest library to classical pattern matching that exists is the RBParseTreeSearcher, which allows to express specialized patterns over a Pharo Abstract Syntax Tree to find some inner node. The question arises of what features a flexible pattern matching language should have. In this paper, we review the features found in different existing pattern matching languages, both in General Purpose Languages (like Java) and in declarative graph pattern matching languages. We then describe MoTion, a new pattern matching engine for Pharo smalltalk, combining all these features. We discuss some aspects of MoTion’s implementation and illustrate its use with real case examples.Successful software requires constant modifications. To guarantee the continuous proper functioning of the applications, developers need to understand them well, particularly by having an accurate map of the dependencies between the parts they are modifying. However, some of these dependencies are not easily identified. For example, in an Android application, there are dependencies between the Java source code and XML parts, some of which are materialized by a generated “R” Java class. We call such dependencies external because they are introduced by some agent external to the source code. On top of the categorization of dependencies defined in the literature, we define restrictions on the External Dependencies that allow us to verify the source code and identify possible flaws. We created a common approach relying on reusable patterns to search for containers and entities that are part of such dependencies and implemented it in a prototype that we validate on two different projects from GitHub and developed using different frameworks.",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S2590118424000339"
    },
    {
      title: "External Dependencies in Software Development",
      conference: "International Conference on the Quality of Information and Communications Technology (Quatic)",
      year: "2023",
      place: "Aveiro, Portugal",
      description: "Successful software requires constant modifications. To guarantee the continuous proper functioning of the applications, developers need to understand them well, particularly by having an accurate map of the dependencies between the parts they are modifying. However, some of these dependencies are not easily identified. For example, in an Android application, there are dependencies between the Java source code and XML parts, some of which are materialized by a generated “R” Java class. We call such dependencies external because they are introduced by some agent external to the source code. On top of the categorization of dependencies defined in the literature, we define restrictions on the External Dependencies that allow us to verify the source code and identify possible flaws. We created a common approach relying on reusable patterns to search for containers and entities that are part of such dependencies and implemented it in a prototype that we validate on two different projects from GitHub and developed using different frameworks.",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-43703-8_16"
    },
    {
      title: "Pattern matching in Pharo",
      conference: "International Workshop on Smalltalk Technologies (IWST)",
      year: "2023",
      place: "Lyon, France",
      description: "Pattern matching is a computational technique used to identify and analyse recurring structures or patterns within data and enable the extraction of meaningful information from the data.In the field of software engineering, pattern matching is often used in applications such as compilers and linters, where the ability to recognise and understand structural patterns in source code is essential for tasks such as optimisation, error detection, and code refactoring, but pattern matching also finds its use for querying deeply recursive structures.Pharo already offers RBParseTreeSearcher, a powerful Domain Specific Language (DSL) defining its own textual syntax with a focus on matching the Pharo Abstract Syntax Tree (AST).This tool is the base of the Pharo Refactoring Framework.However, RBParseTreeSearcher is dedicated to Pharo AST matching only and cannot perform on other kinds of structures or ASTs.In this paper, we introduce MoTion, a new pattern matcher that works on Pharo objects in the large and that focuses on flexibility and expressiveness, and then we present the syntax of both matcher tools.Finally, we compare the execution speed and the expressiveness of both pattern matchers in the context of AST matching against each other as well as against a pure Pharo request on the AST.MoTion offers a powerful base for dedicated pattern matchers and matches any kind of Pharo objects, but its genericity implies lower performances than a dedicated solution tailored for a unique usage as RBParseTreeSearcher.",
      link: "https://hal.science/hal-04217930/"
    }
  ];

}
