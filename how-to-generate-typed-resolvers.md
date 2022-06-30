# How to generate

The first question is about the type of environment you’d like to run codegen. As we are targeting nodeJS here, use space to select the first option (API or server) and hit enter to go to the next step.

The second question is about where the schemas are. You can either use an URL (but you’ll have to have your server running to update the typescript file) or you can specify a file path to the graphql files. In our case, we’d like to target all the .graphql files located under src/graphql/schemas .
Simply type the following value: src/graphql/schemas/\*_/_.graphql .

The third question is about plugins that you maybe need to generate the typescript file. In our case, the default options are more than fine. If you’d like to use codegen for mongodb, then you can check the third option. Otherwise, just hit enter

The fourth question is the path where our typescript file will be generated. You can put it wherever you’d like. In my case, I’ll choose src/graphql/generated.ts

For the fifth question, choose no (type N then hit enter)

For the last one, just keep it by default and hit enter

Finally, for the last question, codegen is asking the script name to run the codegen command. In my case, I’m just going to type codegen and hit enter
